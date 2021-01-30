export function handlePopupOverlayClick(event, action) {
  event.target.classList.contains("popup") && action();
}
