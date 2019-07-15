class SelectedFonts {
    constructor(area) {
        this.area = area
        this.fonts = []
    }

    add(fontName) {
        this.fonts.push(fontName)

        const fontId = this.getFontId(fontName)

        const button = document.createElement('button')
        button.setAttribute('id', fontId)
        button.setAttribute('class', 'btn btn-sm btn-secondary m-1')

        const text = document.createElement('span')
        text.setAttribute('class', 'mx-1')
        text.innerText = fontName
        button.appendChild(text)

        const span = document.createElement('span')
        span.setAttribute('id', this.getFontRemoveId(fontName))
        span.setAttribute('class', 'oi oi-x small mx-1')
        span.addEventListener('click', e => this.remove(e.target.id))
        button.appendChild(span)

        this.area.appendChild(button)
    }
    remove(fontRemoveId) {
        this.fonts = this.fonts.filter(f => f !== this.getFontNameFromRemoveId(fontRemoveId))

        const fontId = this.getFontIdFromRemoveId(fontRemoveId)

        this.area.removeChild(document.getElementById(fontId))
    }

    // Utils
    getFontId(fontName) {
        return fontName.split(' ').join('_')
    }
    getFontRemoveId(fontName) {
        return `${this.getFontId(fontName)}.remove`
    }
    getFontIdFromRemoveId(fontRemoveId) {
        return fontRemoveId.split('.')[0]
    }
    getFontNameFromRemoveId(fontRemoveId) {
        return fontRemoveId
            .split('.')[0]
            .split('_')
            .join(' ')
    }
}

const selection = new SelectedFonts(document.getElementById('selectedFonts'))
const fontSelector = document.getElementById('fontSelector')

const firstOption = document.createElement('option')
firstOption.text = 'Select a font'
fontSelector.add(firstOption)

chrome.fontSettings.getFontList(localFonts => {
    for (let i = 0; i < localFonts.length; i++) {
        const option = document.createElement('option')
        option.text = localFonts[i].fontId
        fontSelector.add(option)
    }

    fontSelector.addEventListener('change', e => {
        const selectedFont = e.target[e.target.selectedIndex].innerText
        if (selectedFont !== firstOption.text) {
            selection.add(selectedFont)
        }
    })

    // Get fonts from local storage
    chrome.storage.local.get(['gcext_modfont_fonts'], result => {
        const config = result.gcext_modfont_fonts
        if (Array.isArray(config)) {
            for (let i = 0; i < config.length; i++) {
                selection.add(config[i])
            }
        }

        const submitBtn = document.getElementById('submitBtn')
        submitBtn.addEventListener('click', () => {
            chrome.storage.local.set({ gcext_modfont_fonts: selection.fonts }, () => {
                chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
                    chrome.tabs.sendMessage(tabs[0].id, { type: 'update' }, response => {
                        if (response.isSuccess) {
                            console.info('Fonts successfully modified')
                        } else {
                            console.error('Font change failed.')
                        }
                        window.close()
                    })
                })
            })
        })
    })
})
