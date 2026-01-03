let url = $request.url;
const replacements = {
    'com:443': 'com',
    'platform=iphone': 'platform=ipad'
};

let modified = false;
for (const [oldVal, newVal] of Object.entries(replacements)) {
    if (url.includes(oldVal)) {
        url = url.split(oldVal).join(newVal); // Cách thay thế nhanh không dùng Regex
        modified = true;
    }
}

if (modified) console.log('Spotify URL updated');

$done({ url });
