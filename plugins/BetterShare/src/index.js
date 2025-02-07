let loaded = true;

const shareOptions = [
    {
        name: "Spotify",
        valueCallback: async (payload, type) => {
            const response = await fetch("https://api.song.link/v1-alpha.1/links?url=" + encodeURIComponent(`https://tidal.com/browse/${type}/` + payload.id));
            const json = await response.json();
            return json.linksByPlatform.spotify.url;
        },
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 496 512"><path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"/><path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"/></svg>`
    },
    {
        name: "YouTube",
        valueCallback: async (payload, type) => {
            const response = await fetch("https://api.song.link/v1-alpha.1/links?url=" + encodeURIComponent(`https://tidal.com/browse/${type}/` + payload.id));
            const json = await response.json();
            return json.linksByPlatform.youtube.url;
        },
        icon: `<svg width="16" height="16" viewBox="0 0 313.23315 216.02286" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs2" /><g id="layer1" transform="translate(-54.079375,-5.2758072)"><path d="m 210.53177,221.29866 c 0,0 98.12514,0 122.46443,-6.48069 13.70449,-3.6724 24.01093,-14.2575 27.62825,-27.32688 6.68807,-23.97854 6.68807,-74.41988 6.68807,-74.41988 0,0 0,-50.117297 -6.68807,-73.879819 C 357.00713,25.79798 346.70069,15.42887 332.9962,11.864515 308.65691,5.2758072 210.53177,5.2758072 210.53177,5.2758072 c 0,0 -97.9062,0 -122.135976,6.5887078 -13.485335,3.564355 -24.010529,13.933465 -27.847831,27.326876 -6.468588,23.762522 -6.468588,73.879819 -6.468588,73.879819 0,0 0,50.44134 6.468588,74.41988 3.837302,13.06938 14.362496,23.65448 27.847831,27.32688 24.229776,6.48069 122.135976,6.48069 122.135976,6.48069 z" fill="#ff0033" id="path1412" style="stroke-width:0.0208149" clip-path="none" /><path d="M 259.30109,113.28723 178.29251,67.382379 v 91.809711 z" fill="#ffffff" id="path1414" style="stroke-width:0.0208149" clip-path="none" /></g></svg>`
    },
    {
        name: "Apple Music",
        valueCallback: async (payload, type) => {
            const response = await fetch("https://api.song.link/v1-alpha.1/links?url=" + encodeURIComponent(`https://tidal.com/browse/${type}/` + payload.id));
            const json = await response.json();
            return json.linksByPlatform.appleMusic.url;
        },
        icon: `<svg version="1.1" width=16 height=16 id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.88" style="enable-background:new 0 0 122.88 122.88" xml:space="preserve"><style type="text/css"><![CDATA[.st0{clip-path:url(#SVGID_2_);}.st1{fill:#FFFFFF;}]]></style><g><g><defs><path id="SVGID_1_" d="M18.43,0h86.02c10.18,0,18.43,8.25,18.43,18.43v86.02c0,10.18-8.25,18.43-18.43,18.43H18.43 C8.25,122.88,0,114.63,0,104.45l0-86.02C0,8.25,8.25,0,18.43,0L18.43,0z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" style="overflow:visible"/></clipPath><g class="st0"><defs><rect id="SVGID_3_" width="122.88" height="122.88"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" style="overflow:visible"/></clipPath><g transform="matrix(1 0 0 1 0 -7.629395e-006)" style="clip-path:url(#SVGID_4_)"><image style="overflow:visible" width="260" height="259" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAARVAAAFjAAACMr/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAQQBBwMBIgACEQEDEQH/ xACrAAEBAQEBAQAAAAAAAAAAAAAAAQUEBgMBAQEBAQEBAQAAAAAAAAAAAAADBQEGBAIQAAEBBQYG AgMAAAAAAAAAAAUAMEAlNRYCEjMEFDYBMUIDQ0UyRBETFREAAAMHBAIDAQEBAAAAAAAAAAECUHHR krIDBHKiM0MSsxEhEzFBMhIAAQEFCAIBBAMAAAAAAAAAAAFAMXECA0GBsZIzQ3ODERIhUWEygkJy E//aAAwDAQACEQMRAAAA1eP5Z/zem1WU5XVZQ1WUNVlDVZQ1WUNVlDVZQ1WUNVlDVZQ1WUNVlDVZ Q1WUPZOVfDyM7Rz4bsVy0URRFEURRFEURRFEURRFEURR6cX89kZ+jnx24rlYoiiKIoiiKIoiiKIo iiKIoij04v5/Iz9HPjtRXKxRFEURRFEURRFEURRFEURRFHphfAyeDQz47IcqAAAAAAAAAAAAAB6Y XwMrP0OCWzFctFEURRFEURRFEURRFEURRFEUelFsDK4O/glshygAAAAAAAAAAAAAHpFXwsrg7+GO xFcpFEURRFEURRFEURRFEURRFEUejF8LL4e/hlsRXKRRFEURRFEURRFEURRFEURRFHohbDy+Hv4Z a8VykURRFEURRFEURRFEURRFEURR6FVsTM4e7ilrRXKRRFEURRFEURRFEURRFEURRFHoFWxMzh7u KetFcpFEURRFEURRFEURRFEURRFEUegFcXN4u3inqhygAAAAAAAAAAAAAG+quNm8XbxT1A5QAAAA AAAAAAAAADfFcbO4u3inqByoAAAAAAAAAAAAAG+K42bx9vFPUBQAAAAAAAAAAAAADeFMfm5T8/aH KAAAAAAAAAAAAAAbApl//9oACAECAAEFALVq1+b1pXrSvWletK9aV60r1pXrSvWletK9aV60r1pX rSvWl+eP67Xyb+O18m/jtfJv47Xyb+O1zb+O1zb+O1zb+O1zb+O1zb9HHm36OPNv0cebfo482/Rx 5t+jjzb9HHm36f/aAAgBAwABBQDsZXL8ezpMstJllpMstJllpMstJllpMstJllpMstJllpMstJll pMstJllpMsv12P6GWwG/s8vgN/ZZfAb+yy+A39ll8Bv7LL4Df2OXwW/sexgt/YdjBb+w7GC39h2M Fv8Af7GC3+/2MFv9/s4Tf73Zwm/3u1ht/t//2gAIAQEAAQUALHiWVI1MYVTGFUxhVMYVTGFUxhVM YVTGFUxhVMYVTGFUxhVMYVTGFUxhVMYVTGFUxhVMYVTGFUxhVMYVTGFUxhVMYVTGFUxhVMYVTGFU xhVMYQ4lm8wEPzh/D7ZPzd/D7ZPzd/D7aPzd/D7aPTd/D7aPTd/EbaPTd/EbbPTZ/EbbOzZ/EbbO zZ/EbcOzZ/E7cOTV/E7dOTV/E7dOTV/E7dNzV/FbeNzR/FbeNzR/FbfNTR/FbfNTR/F7fNTN/FyA zM38XIDMzfxcgMzN/GSEzM38ZITEyfxkiMTJ/GSIxMn8ZIjEyfxsiMTJ/GyIvMn8bIy8yfxsjJ/z 9dC1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1C1kNN/I//aAAgB AgIGPwBflXj1HqPUeo9R6j1HqPUeo9R6j1HqPU8/YWLB+osWC4WLBcLFguFiwXCxYLhYsFwsWC4W LBcLFguFiwXCxYLhYsFwsWC4WLBcK4sLCwsLCwsLCwsLCwsLCwuP/9oACAEDAgY/AKarSpqq05VV VlT6GjSyoaNLKho0sqGjSyoaNLKho0sqGjSyoaNLKho0sqGjSyoaNLKho0sqGjSyoaNLKho0sqHp 6y+n+3j18fHiBS4pMGDvKXFJgwd5S45MGDuKXHJgwdxS45MGDuKXHJgwdxS45cGDuKXHLgwdxT45 cGDuKfHLgwdpT45cGDtKfHLgwdpT45cGDtKfHLgwdpT/AKS4MHaSav4SugbxvG8bxvG8bxvG8bxv G8bxvG8fy1P2P//aAAgBAQEGPwC/Ys3CTbQZEkjSk/6kj/0hypkTAcqZEwHKmRMBypkTAcqZEwHK mRMBypkTAcqZEwHKmRMBypkTAcqZEwHKmRMBypkTAcqZEwHKmRMBypkTAcqZEwHKmRMBypkTAcqZ EwHKmRMBypkTAcqZEwHKmRMBypkTAcqZEwHKmRMBypkTAcqZEwHKmRMBypkTAZOZdUR37RXTQr4I iLwR5F9PGTqKlLAzNN/1jJ1FSlgZmm/6xk6ipSwMzTf9YydRUpYGZpv+sZOoqUsDM03vWMnUVKWB mab3rGTqKlLAzNN71jJ1FSlgZmm96xk6ipJgZmm9QMnUVJMDM03qBkaipJgZem9QMjUVJMDLdeoG Q8qSYGW69QMh5UkwMt16gZDypJgZbr1AyHlSTAy3XqBkPKkmBluvUDIeVJMDLdeoGQ8qSYGU69QM h5UkwMp12gX3lSTAynXaBfeVJMDKddoF95UkwMp12gX3lSTAynXaBfeVJMDKddoF95UkwMp12gX3 lSTAynXaBfeVJMDJddoF95UkwMl12gX3lSTAyXXaBfeVJMDJddoF79f2/T5Ly8fHx/hfz5HfsHfs HfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsHfsH fsHfsHfsHfsF/wDPz/H4ueXl8ef/AD9/Hx9D/9k=" transform="matrix(0.48 0 0 -0.48 -0.6914 123.5713)"/></g></g></g><path class="st1" d="M47.76,86.16v-38.4c0-1.44,0.8-2.32,2.4-2.64l33.12-6.72c1.76-0.32,2.72,0.48,2.88,2.4v29.28 c0,2.4-3.6,4-10.8,4.8c-13.68,2.16-11.52,25.2,7.2,18.96c7.2-2.64,8.4-9.6,8.4-16.56V21.12c0,0,0-4.8-4.08-3.6l-40.8,8.4 c0,0-3.12,0.48-3.12,4.32v48.72c0,2.4-3.6,4-10.8,4.8c-13.68,2.16-11.52,25.2,7.2,18.96C46.56,100.08,47.76,93.12,47.76,86.16 L47.76,86.16z"/></g></svg>`
    }
]


const addButtons = async (payload, type) => {
    let contextMenu;
    await new Promise((res) => setTimeout(async () => {
        let tries = 0;
        contextMenu = document.querySelector(`[data-type="list-container__context-menu"]`);
        while (contextMenu === null && tries < 50) {
            await new Promise((res) => setTimeout(res, 50));
            contextMenu = document.querySelector(`[data-type="list-container__context-menu"]`);
        }
        if (contextMenu) res();
        else return;
    }));
    if (contextMenu) {
        const shareSubContext = contextMenu.querySelector('li[data-track--icon-clicked="share"] ul') || contextMenu;
        const facebookShareButton = shareSubContext.querySelector('li[data-track--icon-clicked="share_facebook"]')
        const twitterShareButton = shareSubContext.querySelector('li[data-track--icon-clicked="share_twitter"]')
        for (const option of shareOptions) {
            const button = facebookShareButton.cloneNode(true);
            button.setAttribute("data-track--icon-clicked", "share_" + option.name.toLowerCase());
            Array.from(button.querySelectorAll('[data-track--icon-clicked="share_facebook"]')).forEach(e => e.setAttribute("data-track--icon-clicked", "share_" + option.name.toLowerCase()));
            button.querySelectorAll("span")[1].textContent = option.name;
            button.querySelectorAll("span")[0].innerHTML = option.icon;
            shareSubContext.insertBefore(button, twitterShareButton);
            button.addEventListener("click", async () => {
                document.body.click();
                let value;
                try {
                    value = await option.valueCallback(payload, type);
                } catch {
                    console.log(`Link could not be generated. It does not appear to exist on ${option.name}.`);
                    return;
                }
                const dialog = document.createElement("div");
                dialog.style.position = "fixed";
                dialog.style.top = "0";
                dialog.style.left = "0";
                dialog.style.width = "100%";
                dialog.style.height = "100%";
                dialog.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                dialog.style.zIndex = "9999";
                dialog.style.display = "flex";
                dialog.style.justifyContent = "center";
                dialog.style.alignItems = "center";
                dialog.style.fontSize = "16px";
                dialog.style.color = "white";
                dialog.style.fontWeight = "bold";
                dialog.style.textAlign = "center";
                dialog.style.transition = "all 0.3s ease-in-out";
                dialog.style.opacity = "0";
                setTimeout(() => {
                    dialog.style.opacity = "1";
                }, 50)
                dialog.innerHTML = "Copied to clipboard!";
                dialog.innerHTML = `
                <div style="background-color: #222222; padding: 20px; border-radius: 10px; display: flex; flex-direction: column; align-items: start;">
                    <h2 style="margin: 0; font-size: 16px; color: white;">Due to browser restrictions, the link must be copied manually. Please copy it below.</h2>
                    <div style="width: 100%; margin: 10px 0; display: flex; align-items: center; justify-content: center;">        
                        <input style="padding: 10px; border-radius: 5px; border: 1px solid #222222; background-color: #555555; width: 80%; color: white;" value="${value}" readonly/>
                    </div>
                </div>
                `
                const inputField = dialog.querySelector("input");
                inputField.addEventListener("focus", () => {
                    inputField.select();
                    document.execCommand("copy");
                })
                dialog.addEventListener("click", (e) => {
                    if (e.target === dialog) dialog.remove();
                })
                document.body.appendChild(dialog);
            })
        }
        twitterShareButton.remove();
        facebookShareButton.remove();
    }
}


window.neptune.intercept("contextMenu/OPEN_MEDIA_ITEM", async ([payload]) => {
    if (!loaded) return true;
    await addButtons(payload, "track");
});

window.neptune.intercept("contextMenu/OPEN", async ([payload]) => {
    if (!loaded) return true;
    if (["ALBUM", "ALBUM_SHARE"].includes(payload.type)) await addButtons(payload, "album");
})

export function onUnload() {
    loaded = false;
}
