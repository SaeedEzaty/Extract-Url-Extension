document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('extractedPaths', (data) => {
        const pathList = document.getElementById('pathList');
        if (data.extractedPaths) {
            data.extractedPaths.forEach(path => {
                const li = document.createElement('li');
                li.textContent = path;
                pathList.appendChild(li);
            });
        }
    });
});
