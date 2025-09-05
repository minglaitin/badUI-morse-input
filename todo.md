- [ ] input field
  - [x] username field
  - [ ] password field
  - [ ] confirm password field
  - [x] update value by morse input
  - [x] clear text box (on username field)
  - [x] click to open telegraph key panel
  - [x] X button to close telegraph key panel
  - [x] disable computer keyboard
  - [x] close input panel after each character

- [x] morse key functionality
  - [x] dot (dit): 1 unit (< 0.2 sec)
  - [x] dash (dah): 3 units (>= 0.2 sec)
  - [x] space between dots/dashes: 1 unit (every mouseup event)
  - [x] space between characters: 3 units (>= 1 sec)
  - [x] 8 dots for deleting 1 character (on password fields)
  - [x] Caption: supported characters: a-z, 0-9

- [x] morse code to implement
  - [x] A-Z
  - [x] 0-9

- [x] styling
  - [x] centering input fields
  - [x] input panel
    - [x] display: grid
    - [x] morse key icon
    - [x] morse code chart
      - [x] chart icon
      - [x] link to Wikipedia
      - [x] open link on same tab
      - [x] caption: cheatsheet

- [x] telegraph key
  - [x] svg
  - [x] on hover
  - [x] on click
  - [x] add audio on pointerdown event

- [x] After submit
  - [x] check if all fields contain at least 1 alphabet and at least 1 number
  - [x] check if password & confirm password are same
    - [x] if same, dialog box saying welcome
    - [x] if not same, ask for input again