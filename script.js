document.addEventListener('DOMContentLoaded', function() {
    const allPageCheckbox = document.querySelector('.header .checkbox-container input');
    const pageCheckboxes = document.querySelectorAll('.page .checkbox-container input');

    allPageCheckbox.addEventListener('change', function() {
        if (allPageCheckbox.checked) {
            pageCheckboxes.forEach(checkbox => {
                checkbox.checked = true;
                checkbox.parentElement.querySelector('.checkmark').style.backgroundColor = '#2469F6';
            });
        } else {
            pageCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
                checkbox.parentElement.querySelector('.checkmark').style.backgroundColor = '';
            });
        }
    });

    pageCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (!checkbox.checked) {
                allPageCheckbox.checked = false;
                checkbox.parentElement.querySelector('.checkmark').style.backgroundColor = '';
            } else {
                const allChecked = Array.from(pageCheckboxes).every(cb => cb.checked);
                allPageCheckbox.checked = allChecked;
                checkbox.parentElement.querySelector('.checkmark').style.backgroundColor = '#2469F6';
            }
        });
    });
});
