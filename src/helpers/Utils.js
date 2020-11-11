export const h = (b, c) => {
    var d = unescape(encodeURIComponent(b));
    for (var e = 0; e < d.length; e++) {
        c = (c << 5) - c + b.charCodeAt(e);
        c &= 4294967295;
    }
    return (c & 255).toString(16)
}

export const convert = (a) => {
    const b = { 16: "DP16", 18: "DP18", 20: "DP20", 24: "DP24", 28: "DP28", 30: "DP30", 32: "DP32", 56: "DP56", 64: "DP64", 72: "DP72", 96: "DP96", 112: "DP112", 128: "DP128" }
    // for (let c in b) {
        let c = 28;
        c = "1/" + c + "/" + a + ".png";
        a = h(c, 317426846);
        let result = "https://static.xx.fbcdn.net/images/emoji.php/v9/t" + a + "/" + c;
        return result;
    // }
}


// export const h = (a, b, c) => {
//     var d = a.unescape(encodeURIComponent(b));
//     c = c;
//     for (var e = 0; e < d.length; e++) {
//         c = (c << 5) - c + b.charCodeAt(e);
//         c &= 4294967295;
//     }

//     return (c & 255).toString(16)
// }

// export const i = (a, c, d) => {
//     c in b("EmojiStaticConfig").supportedSizes || g(0, 772, c);
//     c = b("EmojiConfig").pixelRatio + "/" + c + "/" + a + b("EmojiStaticConfig").fileExt;
//     a = h(c, b("EmojiStaticConfig").checksumBase);
//     return b("EmojiConfig").schemaAuth + "/" + d + a + "/" + c
// }

export const toDataUrl = (url, callback) => {
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

export const getKeyFromCodePoints = (a) => {
    const h = /_fe0f/g;
    const strings = a.map(n => String.fromCodePoint(n));
    return strings.map(function (a) {
        return a.codePointAt(0).toString(16)
    }).join("_").replace(h, "")
};