// Atualização automática da duração do estágio
function updateEstagioDuration() {
    const startDate = new Date(2026, 1, 1);
    const now = new Date();
    let months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
    if (now.getDate() < startDate.getDate()) months--;
    if (months < 0) months = 0;
    const durationSpan = document.getElementById('estagio-duracao');
    if (durationSpan) durationSpan.textContent = months;
}
document.addEventListener('DOMContentLoaded', updateEstagioDuration);
setInterval(updateEstagioDuration, 3600000);

// Modal - Monitoria
function openMathModal() {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalFiles = document.getElementById('modal-files');

    modalTitle.textContent = 'Fortalecimento em Matemática Aplicada';
    modalDescription.innerHTML = `
        <h3>Monitoria de Cálculo II (2023-2024)</h3>
        <p style="text-align: justify; line-height: 1.6;">
            Durante o período de 1 ano como monitora bolsista da disciplina de Cálculo II na UFRN, 
            tive a oportunidade de consolidar e aprofundar meus conhecimentos em matemática aplicada 
            à engenharia. O contato diário com os alunos e a necessidade de explicar conceitos de 
            forma clara e didática me permitiu dominar os seguintes tópicos:
        </p>
        <ul style="list-style: none; padding-left: 0; margin: 1rem 0;">
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 0.5rem;"></i>
                <strong>Cálculo I:</strong> Limites, derivadas, regras de derivação, aplicações (taxas relacionadas, otimização), esboço de gráficos.
            </li>
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 0.5rem;"></i>
                <strong>Cálculo II:</strong> Integrais indefinidas e definidas, técnicas de integração (substituição, partes, frações parciais), áreas, volumes, comprimento de arco, centro de massa.
            </li>
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 0.5rem;"></i>
                <strong>Cálculo III:</strong> Séries (convergência, Taylor/Maclaurin), funções de várias variáveis, derivadas parciais, gradiente, integrais duplas e triplas, aplicações em engenharia.
            </li>
        </ul>
        <p style="text-align: justify; line-height: 1.6;">
            Além dos conteúdos, a monitoria aprimorou minhas habilidades de <strong>comunicação</strong>, 
            <strong>didática</strong> e <strong>resolução de problemas</strong>, competências essenciais 
            para minha atuação como engenheira civil. Essa base sólida em matemática é fundamental 
            para disciplinas como Mecânica dos Sólidos, Hidráulica, Estruturas e Geotecnia.
        </p>
    `;
    modalFiles.innerHTML = '';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Modal - Estágio
function openEstagioModal() {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalFiles = document.getElementById('modal-files');

    modalTitle.textContent = 'Estágio em Engenharia Civil - Linhares & Rebouças';
    modalDescription.innerHTML = `
        <h3>Visão Geral</h3>
        <p style="text-align: justify; line-height: 1.6;">
            Atuo como estagiária na <strong>Linhares & Rebouças</strong>, uma empresa de engenharia 
            com forte atuação em projetos complementares e gestão de obras no Rio Grande do Norte. 
            Minhas atividades são focadas no desenvolvimento de projetos e na compatibilização em 
            <strong>BIM (Building Information Modeling)</strong>.
        </p>
        <h3>Principais Atividades</h3>
        <ul style="list-style: none; padding-left: 0; margin: 1rem 0;">
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 0.5rem;"></i>
                <strong>Modelagem BIM:</strong> Criação de modelos no Revit, compatibilização entre disciplinas.
            </li>
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 0.5rem;"></i>
                <strong>Projetos Complementares:</strong> Hidrossanitário, elétrico, prevenção contra incêndio.
            </li>
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 0.5rem;"></i>
                <strong>Apresentação a Clientes:</strong> Pranchas, perspectivas e relatórios utilizando AutoCAD e Revit.
            </li>
        </ul>
     <h3>Ferramentas</h3>
<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.5rem 0;">

<span class="skill-tag">AutoCAD</span>
<span class="skill-tag">Revit</span>
<span class="skill-tag">Excel</span>
<span class="skill-tag">Word</span>

</div>
        <p style="font-style: italic; color: var(--medium-blue);">
            “O estágio tem sido uma oportunidade única de aplicar conhecimentos teóricos na prática.”
        </p>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Eventos de clique nos blocos
document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.experience-item[data-experience]');
    blocks.forEach(block => {
        block.addEventListener('click', function() {
            const type = this.dataset.experience;
            if (type === 'monitoria') openMathModal();
            else if (type === 'estagio') openEstagioModal();
        });
    });
});
