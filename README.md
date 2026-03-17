# 🐆 Black Panther Club - Dance Team Website

Website showcasing the elite dance teams of Black Panther Club's 3DX Virtual World.

## 📋 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Cursor**: Custom animated cursor with ring effect
- **Particle Animation**: Dynamic background particles that respond to mouse movement
- **Smooth Animations**: Fade-in effects as you scroll
- **Modern Styling**: Gold and blue themed dark interface with glassmorphism effects

## 🎭 Dance Teams

Our platform showcases 7 exceptional dance teams:

1. **R|D** - Diamond-themed luxury performance team
2. **Sun & Moon Booties** - Vibrant day and night energy
3. **Ribbon & Bows** - Elegant pole and aerial dance specialists
4. **The Lemaire Dancers** - Contemporary blue-themed ensemble
5. **Sugar & Spice OT** - Heart-centered emotional performers
6. **[ragebaiti]** - Experimental glitch-style performers
7. **Polecats** - Silver and sophisticated pole dancers

## 📁 Project Structure

```
.
├── danceteam.html       # Main website file
├── loghi/               # Team logos directory
│   ├── rd.png
│   ├── sun-moon-booties.png
│   ├── ribbon-bows.png
│   ├── lemaire-dancers.png
│   ├── sugar-spice.png
│   ├── ragebaiti.png
│   └── polecats.png
├── lang.js              # Language support (if available)
├── favicon.ico          # Website icon
├── favicon.png          # Favicon PNG version
└── README.md            # This file
```

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/BlackPantherClub-DanceTeam.git
   cd BlackPantherClub-DanceTeam
   ```

2. **Open in browser:**
   - Simply open `danceteam.html` in your web browser
   - Or serve via local HTTP server for best results

3. **Deploy to GitHub Pages:**
   - Push to main branch
   - Enable GitHub Pages in repository settings
   - Site will be live at `https://yourusername.github.io/BlackPantherClub-DanceTeam/`

## 🎨 Customization

### Colors
Edit the CSS variables in the `<style>` section:
```css
:root {
  --deep:#04030a;           /* Dark background */
  --gold:#c9952a;           /* Primary accent color */
  --gold-light:#f0c060;     /* Light accent */
  --blue-glow:#3b00cc;      /* Secondary accent */
  --white:#e8e8f0;          /* Text color */
  --panel:rgba(8,5,20,0.88) /* Card background */
}
```

### Adding New Teams
1. Add the team logo to `/loghi/` folder
2. Add a new card in the `.team-grid` section:
```html
<div class="team-card fade-in">
  <img src="loghi/your-team.png" alt="Team Name">
  <h3>Team Name</h3>
</div>
```

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with variables and transitions
- **JavaScript** - Interactive animations and effects
- **Canvas API** - Particle system animation

## 📱 Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

All rights reserved © 2026 Black Panther Club

## 📧 Contact

For inquiries or collaborations, reach out through the Black Panther Club official channels.

---

**Last Updated:** March 2026  
**Version:** 1.1  
**Status:** Active
