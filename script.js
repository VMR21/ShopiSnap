document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling; // Get the content div
            const faqIcon = button.querySelector('.faq-icon'); // Get the icon

            // Toggle the 'active' class on the button
            button.classList.toggle('active');

            // Toggle the 'show' class on the content
            if (accordionContent.classList.contains('show')) {
                accordionContent.classList.remove('show');
                accordionContent.style.maxHeight = null; // Reset max-height
                faqIcon.classList.remove('fa-minus'); // Change icon back to plus
                faqIcon.classList.add('fa-plus');
            } else {
                // Close any other open accordions (optional, but good UX)
                document.querySelectorAll('.accordion-content.show').forEach(openContent => {
                    openContent.classList.remove('show');
                    openContent.style.maxHeight = null;
                    openContent.previousElementSibling.classList.remove('active'); // Remove active from button
                    openContent.previousElementSibling.querySelector('.faq-icon').classList.remove('fa-minus');
                    openContent.previousElementSibling.querySelector('.faq-icon').classList.add('fa-plus');
                });

                accordionContent.classList.add('show');
                // Set max-height to its scrollHeight to enable CSS transition
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                faqIcon.classList.remove('fa-plus'); // Change icon to minus
                faqIcon.classList.add('fa-minus');
            }
        });
    });
});
