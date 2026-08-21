// ==================== ATUALIZAÇÃO AUTOMÁTICA DA DURAÇÃO DO ESTÁGIO ====================
function updateEstagioDuration() {
    const startDate = new Date(2026, 1, 1); // 1º de fevereiro de 2026
    const now = new Date();
    let months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
    if (now.getDate() < startDate.getDate()) months--;
    if (months < 0) months = 0;
    const durationSpan = document.getElementById('estagio-duracao');
    if (durationSpan) durationSpan.textContent = months;
}
// Executa ao carregar e atualiza a cada hora
document.addEventListener('DOMContentLoaded', updateEstagioDuration);
setInterval(updateEstagioDuration, 3600000);
// ======================================================================================

// ==================== MODAL - MONITORIA (MATEMÁTICA) ====================
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
        <p style="margin-top: 1rem; font-style: italic; color: var(--medium-blue);">
            “A matemática é a linguagem com a qual Deus escreveu o universo.” – Galileu
        </p>
    `;

    // Opcional: adicionar links para certificados ou materiais
    modalFiles.innerHTML = `
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
            <p><strong>Certificados relacionados:</strong></p>
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 0.5rem;">
                <a href="#" style="background: var(--light-blue); padding: 0.4rem 1rem; border-radius: 20px; text-decoration: none; color: var(--primary-blue); font-size: 0.9rem;">
                    <i class="fas fa-certificate"></i> Certificado Monitoria (PDF)
                </a>
                <!-- Substitua o link acima pelo caminho real do seu certificado, se tiver -->
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// ==================== MODAL - ESTÁGIO ====================
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
            <strong>BIM (Building Information Modeling)</strong>, utilizando ferramentas de ponta 
            para garantir a integração entre disciplinas e a qualidade das entregas.
        </p>

        <h3>Principais Atividades</h3>
        <ul style="list-style: none; padding-left: 0; margin: 1rem 0;">
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 0.5rem;"></i>
                <strong>Modelagem BIM:</strong> Criação de modelos arquitetônicos, estruturais e de instalações no Revit, garantindo a interoperabilidade entre disciplinas.
            </li>
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 0.5rem;"></i>
                <strong>Compatibilização:</strong> Análise de interferências entre projetos (hidrossanitário, elétrico, estrutural) usando ferramentas de clash detection.
            </li>
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 0.5rem;"></i>
                <strong>Elaboração de Projetos Complementares:</strong> Desenvolvimento de projetos de instalações hidrossanitárias, elétricas e de prevenção contra incêndio para condomínios de alto padrão e residências unifamiliares.
            </li>
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 0.5rem;"></i>
                <strong>Apresentação a Clientes:</strong> Preparação de pranchas, perspectivas e relatórios para reuniões com clientes, utilizando AutoCAD e Revit para visualização.
            </li>
        </ul>

        <h3>Projetos em Destaque</h3>
        <ul style="list-style: none; padding-left: 0; margin: 1rem 0;">
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-building" style="color: var(--medium-blue); margin-right: 0.5rem;"></i>
                <strong>Condomínio Residencial Villa Nova (Natal/RN):</strong> Compatibilização dos projetos hidrossanitário e elétrico, utilizando Revit para detecção de conflitos e otimização de shafts.
            </li>
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-home" style="color: var(--medium-blue); margin-right: 0.5rem;"></i>
                <strong>Residência Unifamiliar em Ponta Negra:</strong> Modelagem arquitetônica e estrutural, com detalhamento de fundações e lajes.
            </li>
            <li style="margin-bottom: 0.5rem;">
                <i class="fas fa-water" style="color: var(--medium-blue); margin-right: 0.5rem;"></i>
                <strong>Projeto de Drenagem Pluvial para Loteamento (Parnamirim):</strong> Dimensionamento de redes de águas pluviais utilizando AutoCAD Civil 3D.
            </li>
        </ul>

        <h3>Ferramentas Utilizadas</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.5rem 0 1rem 0;">
            <span class="skill-tag">AutoCAD</span>
            <span class="skill-tag">Revit</span>
            <span class="skill-tag">Civil 3D</span>
            <span class="skill-tag">BIM 360</span>
            <span class="skill-tag">Navisworks</span>
            <span class="skill-tag">Excel</span>
        </div>

        <p style="text-align: justify; font-style: italic; color: var(--medium-blue); margin-top: 1rem;">
            “O estágio tem sido uma oportunidade única de aplicar conhecimentos teóricos na prática, 
            desenvolvendo soluções inovadoras e contribuindo para projetos de grande impacto no estado.”
        </p>
    `;

    modalFiles.innerHTML = `
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
            <p><strong>Projetos relacionados (disponíveis na seção de Projetos):</strong></p>
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 0.5rem;">
                <a href="#projetos" style="background: var(--light-blue); padding: 0.4rem 1rem; border-radius: 20px; text-decoration: none; color: var(--primary-blue); font-size: 0.9rem;">
                    <i class="fas fa-folder-open"></i> Ver Projetos
                </a>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// ==================== EVENTOS DE CLIQUE ====================
document.addEventListener('DOMContentLoaded', function() {
    // Trigger da monitoria (matemática)
    const mathTrigger = document.getElementById('math-trigger');
    if (mathTrigger) {
        mathTrigger.addEventListener('click', openMathModal);
    }

    // Trigger do estágio
    const estagioTrigger = document.getElementById('estagio-trigger');
    if (estagioTrigger) {
        estagioTrigger.addEventListener('click', openEstagioModal);
    }
});
