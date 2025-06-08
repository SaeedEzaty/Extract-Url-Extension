const paths = new Set();

document.querySelectorAll('a').forEach(anchor => {
    const url = new URL(anchor.href);
    paths.add(url.pathname);
});

chrome.storage.local.set({ extractedPaths: Array.from(paths) });
