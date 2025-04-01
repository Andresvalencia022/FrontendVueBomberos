

export default {    
    decodeHTMLEntities(text) {
        if (!text) return "";
        const parser = new DOMParser();
        return parser.parseFromString(text, "text/html").body.textContent || "";
      },

};