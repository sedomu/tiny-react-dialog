### `tiny-react-dialog`

A simple, lightweight, and customizable React library for displaying modal dialog boxes.

-----

### Installation

Install the package using npm:

```bash
npm install tiny-react-dialog
```

Or with Yarn:

```bash
yarn add tiny-react-dialog
```

-----

### Usage

**Import**

The core component is `TinyReactDialog`. The default styles are optional; if you prefer to provide your own styling, you can omit the CSS import.

```jsx
import { TinyReactDialog } from 'tiny-react-dialog';
// Optional: import default styles
import 'tiny-react-dialog/index.css';
```

**Controlling the Component**

`TinyReactDialog` is a **controlled component**. You must manage its visibility from your parent component's state using the **`visible`** prop and a callback function for the **`onClose`** prop.

The `onClose` callback is triggered when the user clicks the close button or the overlay, allowing you to update your state and close the dialog.

**Styling and Customization**

The component comes with an optional default CSS file. If you choose not to import it, you can style the dialog yourself using the default CSS class names or by providing your own via the `classNames` prop.

The component's default structure is:

```html
<div class="tiny-react-dialog__overlay">
    <div class="tiny-react-dialog__container">
        <div class="tiny-react-dialog__content">
            <!-- Content -->
        </div>
        <button class="tiny-react-dialog__close">
            <!-- SVG closing icon -->
        </button>
    </div>
</div>
```

To add your own classes (for example, with **Tailwind CSS**), use the **`classNames`** prop:

```jsx
import { TinyReactDialog } from 'tiny-react-dialog';

<TinyReactDialog 
  classNames={{
    overlay: "bg-black/50 backdrop-blur",
    container: "bg-white rounded-lg shadow-lg",
    content: "p-4",
    close: "top-2 right-2 p-1 text-gray-400 hover:text-gray-600"
}} />
```

-----

### Example

Here's a complete example showing how to manage the dialog's state.

```jsx
import { useState } from "react";
import { TinyReactDialog } from "tiny-react-dialog";
import "tiny-react-dialog/index.css";

export default function Example() {
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const openDialog = () => {
        setIsDialogVisible(true);
    };

    const closeDialog = () => {
        setIsDialogVisible(false);
    };

    return (
        <>
            <button onClick={openDialog}>Open Dialog</button>

            <TinyReactDialog visible={isDialogVisible} onClose={closeDialog}>
                Dialog Content
            </TinyReactDialog>
        </>
    );
}
```

-----

### Props

The component accepts the following properties:

| Prop         | Type                        | Default Value | Description                                                                     |
|:-------------|:----------------------------|:--------------|:--------------------------------------------------------------------------------|
| `visible`    | `boolean`                   | `false`       | Determines whether the dialog box is visible or hidden.                         |
| `onClose`    | `() => void`                | **Required**  | A function to be called when the user requests to close the dialog.             |
| `children`   | `ReactNode`                 | `undefined`   | The content to be rendered inside the dialog box.                               |
| `classNames` | `{ overlay?: string, ... }` | `{}`          | An object for applying custom CSS class names to different parts of the dialog. |