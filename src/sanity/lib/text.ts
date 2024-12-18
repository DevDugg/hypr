export function toPlainText(blocks: any[]) {
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }

      return block.children.map((child: any) => child.text).join("");
    })
    .join("\n\n");
}

export const getFirstSentence = (text: string): string => {
  const match = text.match(/^.*?[.!?](?:\s|$)/);
  return match ? match[0].trim() : text;
};
