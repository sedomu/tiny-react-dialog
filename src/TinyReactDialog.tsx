import { type ReactNode } from "react";

import "./utils/mergeClassnames";
import mergeClassnames from "./utils/mergeClassnames";

export type TinyReactDialogProps = {
    visible: boolean;
    onClose: () => void;
    children?: ReactNode;
    classNames?: {
        overlay?: string;
        container?: string;
        content?: string;
        close?: string;
    };
};

export function TinyReactDialog({
    visible,
    onClose,
    children = "tiny-react-dialog: children is missing",
    classNames = {},
}: TinyReactDialogProps) {
    return (
        <>
            {visible && (
                <div
                    className={mergeClassnames(
                        "tiny-react-dialog__overlay",
                        classNames?.overlay
                    )}
                    onClick={onClose}
                >
                    <div
                        className={mergeClassnames(
                            "tiny-react-dialog__container",
                            classNames?.container
                        )}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className={mergeClassnames(
                                "tiny-react-dialog__content",
                                classNames?.content
                            )}
                        >
                            {children}
                        </div>
                        <button
                            className={mergeClassnames(
                                "tiny-react-dialog__close",
                                classNames?.close
                            )}
                            onClick={onClose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-x-icon lucide-x"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
