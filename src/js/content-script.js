class FontSetter {
    set() {
        chrome.storage.local.get('gcext_modfont_fonts', result => {
            console.log(result)

            const config = result.gcext_modfont_fonts
            if (Array.isArray(config)) {
                // Get array of user specified fonts and convert it to string
                config.push('sans-serif')
                const fonts = config.map(x => (x.split(' ').length > 1 ? `"${x}"` : x)).join(', ')
                console.log(fonts)

                // Set configured fonts to body
                document.body.style.fontFamily = fonts
            }
        })
    }
}

window.addEventListener('load', () => {
    const fontSetter = new FontSetter()

    fontSetter.set()

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === 'update') {
            fontSetter.set()
        }

        sendResponse({ isSuccess: true })
    })
})
