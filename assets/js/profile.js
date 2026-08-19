// Função para trocar a foto ao clicar
        const imagesList = ['img/eu/Euzinha.jpeg', 'img/eu/Euzinha 2.jpeg', 'img/eu/Euzinha 3.jpeg'];
        let currentImageIndex = 0;
        function changeImage() {
            currentImageIndex = (currentImageIndex + 1) % imagesList.length;
            const imgElement = document.getElementById('profileImage');
            imgElement.src = imagesList[currentImageIndex];
        }
