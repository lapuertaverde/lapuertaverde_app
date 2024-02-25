# TkDrawer component

this component displays a floating panel over the page.
The panel allows the rest of the page to be clickable and functional normally.
It has this props open, onClose, children

# PROPS:

# open \*: Boolean (false by default) Mandatory for the componente to be able to showing and hiding the Drawer

---

For controlling the display of the floating panel, for better controlling of the component
on the parent component you can define a state:

const [isDrawerOpen, setIsDrawerOpen] = useState(false)

and then:
<TkDrawer open={isDrawerOpen} ...... />

# onClose \*: function (Mandatory for the component to be able to close the drawer)

---

This function must be passed to the component for controlling the closing of the floating Drawer
in the parent component you can have something like:

/\*_Close the Drawwer _/
const handleClose = () => {
setIsDrawerOpen(false)
}
having this <TkDrawer open={isDrawerOpen} onClose={handleClose} ...... />

# children \*: Mandatory (does not make sense to not pass them)

---

The elements that you want to be displayed within the drawer:

<TkDrawer open={isDrawerOpen} onClose={handleClose}>
<h2>Drawer content</h2>
<p>
    Drawer childrens text    
</p>
</TkDrawer>
<div>

# toolbaredChildren \*: Not mandatory

---

If the drawer's content display several form fields, we display the content inside a component that creates a scroll area and we display a docked toolbar at the botton to save the form fields.

<!-- This tkDrawer should be inside (as a children) a form component. -->

<TkDrawer open={isDrawerOpen} onClose={handleClose} toolbaredChildren={true}></TkDrawer>

# drawerTitle : Not mandatory

---

Boolean property. For adding a title to the drawer itself.

<TkDrawer drawerTitle="Drawer title"></TkDrawer>

# width : Not mandatory

A sixe in pixels.

---

saveButton: PropTypes.bool

Property to set or not a saveButton for some configurator views

<TkDrawer drawerWidth={false}></TkDrawer>

# saveButton : Not mandatory

---

---

header: PropTypes.bool

Property to set or not a header, by default is true

<TkDrawer header={false}></TkDrawer>

# titleHeader : Not mandatory

---

Property to set a custom width for the drawer itself. If this prop is not there, the default drawer is 340px. It only accepts fixed units of messaurement.
!!!!!!AThis property was changed for some issues within toolbars located in drawer.

<TkDrawer drawerWidth="500px"></TkDrawer>

# formId : Not mandatory

---

Property to link the form and the Save button.

<TkDrawer formId="1234"></TkDrawer>

---

# CLS prop

To be able to add a class for this tkdrawer to control the width.

1. If **tkDrawerLarge** class is applied, we are setting a width of **900px**
2. If **tkDrawerMedium** class is applied, we are setting a width of **600px**
3. By default, we are setting a **tkDrawerDefault** class, we are setting a default width of **340px** .

# customFooterNode

When Drawer's footer needs to render custom buttons these can be passed by customFooterNode as node.

example:

```jsx
const customButton = <TkButton text="Recalculate Data Objects" variant="secondary" onClick={() => console.log('testing click')} />

<TkDrawer customFooterNode={customButton}/>
```
