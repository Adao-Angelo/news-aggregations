import type { ToastOptions } from "react-hot-toast";

export const ARTICLES_PER_PAGE = 6;
export const DEFAULT_IMAGE_URL = "/file-not-found.avif";

export const TOAST_OPTIONS: ToastOptions = {
  position: "bottom-center",
  style: {
    fontSize: 12,
    border: "1px solid #1c1c1c53",
    padding: "16px",
    color: "#1c1c1c",
    background: "#f2f2f2",
    borderRadius: 4,
  },
};
