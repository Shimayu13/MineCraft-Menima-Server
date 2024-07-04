document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggleButton');
    const explanation = document.getElementById('explanation');

    button.addEventListener('click', function(event) {
        explanation.classList.toggle('hidden');
        event.stopPropagation();  // 親要素へのイベントの伝播を防ぐ
    });

    document.addEventListener('click', function() {
        if (!explanation.classList.contains('hidden')) {
            explanation.classList.add('hidden');
        }
    });

    explanation.addEventListener('click', function(event) {
        event.stopPropagation();  // 親要素へのイベントの伝播を防ぐ
    });
});