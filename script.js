<script>
    document.addEventListener('DOMContentLoaded', function() {
        const squares = document.querySelectorAll('.lavender');

        squares.forEach(square => {
            square.addEventListener('mouseenter', function() {
                // Change all squares to coffee color except the current one
                squares.forEach(otherSquare => {
                    if (otherSquare !== square) {
                        otherSquare.classList.add('coffee');
                    }
                });
            });

            square.addEventListener('mouseleave', function() {
                // Change all squares back to lavender color
                squares.forEach(otherSquare => {
                    otherSquare.classList.remove('coffee');
                });
            });
        });
    });
</script>
