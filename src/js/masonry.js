import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

export default function() {
    const grids = Array.from(document.querySelectorAll('.js-masonry-grid'))

    grids.forEach(grid => {
        const masonry = new Masonry(grid, {
            itemSelector: ".bonus__partners-grid-item",
            percentPosition: true
        });

        imagesLoaded(grid).on("progress", function() {
            masonry.layout();
        });
    })
}