(() => {
    document.querySelectorAll('[data-framer-name="Close"][tabindex]').forEach((item) => {
        const heading = item.querySelector('h3');
        if (!heading) return;

        item.setAttribute('role', 'button');
        item.setAttribute('aria-expanded', 'false');
        item.setAttribute('aria-label', heading.textContent.trim());

        const toggle = () => {
            const expanded = item.getAttribute('aria-expanded') === 'true';
            item.setAttribute('aria-expanded', String(!expanded));
            item.dataset.name = expanded ? 'Close' : 'Open';
            item.querySelectorAll('[data-framer-component-type="RichTextContainer"]')
                .forEach((content) => {
                    if (content.contains(heading)) return;
                    content.hidden = expanded;
                });
        };

        item.addEventListener('click', toggle);
        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggle();
            }
        });
    });
})();
