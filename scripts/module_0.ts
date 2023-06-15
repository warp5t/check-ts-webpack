export const button: HTMLButtonElement | null = document.querySelector('.button');
export function action() :void {
  if (button) {
    button.classList.toggle('recolor');
  }
}