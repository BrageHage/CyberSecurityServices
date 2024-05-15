export const handleClickUrl = (url: string, newTab: Boolean) => {
  if (newTab) {
    window.open(url, "_blank");
  } else {
    window.open(url, "_self");
  }
};
