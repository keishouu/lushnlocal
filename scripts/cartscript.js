fetch("navbar.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("navbar").innerHTML = data;
	});

function changeQty(button, change) {
            let qtyInput = button.parentElement.querySelector('.qty-input');
            let current = parseInt(qtyInput.value) || 1;
            qtyInput.value = Math.max(1, current + change);
            updateCartTotal();
        }

        function updateCartTotal() {
            let total = 0;

            document.querySelectorAll('.cart-item').forEach(item => {
                let checkbox = item.querySelector('input[type="checkbox"]');

                if (checkbox.checked) {
                    let qty = parseInt(item.querySelector('.qty-input').value) || 1;
                    let unitPrice = parseFloat(
                        item.querySelector('.item-price').textContent.replace(/[₱,]/g, "")
                    );
                    total += qty * unitPrice;
                }
            });

            document.getElementById('totalPrice').textContent = total.toFixed(0);
        }

        document.addEventListener('DOMContentLoaded', function() {
 
            document.querySelectorAll('.qty-input').forEach(input => {
                input.addEventListener('input', updateCartTotal);
            });

            document.querySelectorAll('.cart-item input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', updateCartTotal);
            });

            updateCartTotal();
        });

        
fetch("footer.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("footer").innerHTML = data;
	});