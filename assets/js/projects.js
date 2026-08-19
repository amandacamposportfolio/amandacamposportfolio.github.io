// Filtro e interface dos projetos
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCardsContainer = document.getElementById('projects-grid');

        function removeExtension(filename) {
            return filename.replace(/\.[^/.]+$/, "");
        }

        function renderProjects(filter = 'all') {
            projectCardsContainer.innerHTML = '';
            const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
            filteredProjects.forEach((project, index) => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.setAttribute('data-category', project.category);
                projectCard.setAttribute('data-project-index', index);
                const fullDescription = project.description;
                projectCard.innerHTML = `
                    <div class="project-info">
                        <span class="project-category">${project.software}</span>
                        <h3>${project.title}</h3>
                        <p>${fullDescription}</p>
                        <p style="color: var(--primary-blue); margin-top: 1rem; font-size: 0.9rem;">
                        </p>
                    </div>
                    <div class="project-year">${project.year}</div>
                `;
                projectCard.addEventListener('click', () => openProjectModal(project));
                projectCardsContainer.appendChild(projectCard);
            });
            if (filteredProjects.length === 0) {
                projectCardsContainer.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                        <i class="fas fa-folder-open" style="font-size: 3rem; color: var(--medium-blue); margin-bottom: 1rem;"></i>
                        <h3>Nenhum projeto encontrado para esta categoria</h3>
                        <p>Em breve adicionarei novos projetos aqui.</p>
                    </div>
                `;
            }
        }

        function openProjectModal(project) {
            const modal = document.getElementById('projectModal');
            const modalTitle = document.getElementById('modal-title');
            const modalDescription = document.getElementById('modal-description');
            const modalFiles = document.getElementById('modal-files');
            modalTitle.textContent = project.title;
            modalDescription.innerHTML = `
                <h3>Sobre o projeto</h3>
                <p>${project.description}</p>
                <p style="margin-top: 0.5rem;"><strong>Software:</strong> ${project.software}</p>
                <p style="margin-top: 0.5rem;"><strong>Ano:</strong> ${project.year}</p>
            `;
            modalFiles.innerHTML = '';
            project.files.forEach(file => {
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                let iconClass = file.icon;
                if (file.name.endsWith('.xlsx')) iconClass = 'fa-file-excel';
                else if (file.name.endsWith('.pdf')) iconClass = 'fa-file-pdf';
                else if (file.name.endsWith('.dwg')) iconClass = 'fa-file';
                let openLink;
                if (file.isFolder) {
                    openLink = `<a href="${file.path}" class="file-download" target="_blank"><i class="fas fa-folder-open"></i> Abrir Pasta</a>`;
                } else {
                    openLink = `<a href="${file.path}" class="file-download" target="_blank"><i class="fas fa-external-link-alt"></i> Abrir Arquivo</a>`;
                }
                fileItem.innerHTML = `
                    <div class="file-info">
                        <i class="fas ${iconClass} file-icon"></i>
                        <div class="file-details">
                            <div class="file-name">${removeExtension(file.name)}</div>
                            <div class="file-description">${file.description}</div>
                        </div>
                    </div>
                    ${openLink}
                `;
                modalFiles.appendChild(fileItem);
            });
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        const modal = document.getElementById('projectModal');
        const closeBtn = document.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filter = button.getAttribute('data-filter');
                renderProjects(filter);
            });
        });

        renderProjects();
