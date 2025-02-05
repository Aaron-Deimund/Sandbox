export async function decompressGzip(base64Data) {
    // Convert base64 string to Uint8Array
    let binaryString = atob(base64Data);
    let byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        byteArray[i] = binaryString.charCodeAt(i);
    }

    // Use built-in DecompressionStream API
    const decompressionStream = new DecompressionStream("gzip");
    const decompressedStream = new Response(
        new Blob([byteArray]).stream().pipeThrough(decompressionStream)
    );

    return await decompressedStream.text();
}
