// ==================== ATUALIZAÇÃO AUTOMÁTICA DA DURAÇÃO DO ESTÁGIO ====================
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
        // ======================================================================================
