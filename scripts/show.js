const showButton = document.getElementById('show');
let isExpanded = false;

showButton.addEventListener('click', () => {
    const hiddenItems = document.querySelectorAll('.transmission-item');

    hiddenItems.forEach((item) => {
        if (isExpanded) {
            item.animate(
                [
                    { opacity: 1, transform: 'translateY(0px)' },
                    { opacity: 0, transform: 'translateY(10px)' }
                ],
                { duration: 400, easing: 'ease' }
            ).onfinish = () => {
                item.classList.add('hidden');
            };
        } else {
            item.classList.remove('hidden');
            item.animate(
                [
                    { opacity: 0, transform: 'translateY(10px)' },
                    { opacity: 1, transform: 'translateY(0px)' }
                ],
                { duration: 400, easing: 'ease' }
            );
        }
    });

    isExpanded = !isExpanded;
    showButton.innerHTML = isExpanded
        ? `<p class="relative flex text-white mt-3 mb-4 duration-300 hover:scale-[99%]"><img class="mr-2" src="./assets/arrow-up.png" draggable="false" alt="Strzałka"> Zobacz mniej transmisji</p>`
        : `<p class="relative flex text-white mt-3 mb-4 duration-300 hover:scale-[99%]"><img class="mr-2" src="./assets/arrow-down.png" draggable="false" alt="Strzałka"> Zobacz więcej transmisji</p>`;
});
