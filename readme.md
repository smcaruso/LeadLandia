# LeadLandia

> A magical or exciting place where leads are generated.
*—ChatGPT, 2023*

## Project Setup

LeadLandia will serve up to three pages:
1. **Character Creator** - page includes a form for lead-gen information to be input, and a 3D view showing the Prospect Pal generated from their responses. Designed for use on a tablet, tested on an iPad mini 6.
2. **LeadLandia Viewer** - page is entirely a 3D view showing a selection of Prospect Pals stored in a database. Updates automatically when a new Pal is created. To be shown on a large TV screen.
3. * TBD **Trading Card Deck** - page shows a Prospect Pal from the database based on the URL it's accessed from, in a trading card format. May also contain functionality to view other cards in the deck. *

## Package Dependencies

- **LeadLandia uses Vite for bundling and Vercel for hosting.**
- **Three.js** is used for importing and rendering 3D models (Prospect Pals)
- **lil.gui** is used to interactively adjust parameters in the 3D scene during development.
- **GSAP** will potentially be used for animation but is not yet installed. 