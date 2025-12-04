# Image Upload Instructions

## How to Add Your Family Photos

### Step 1: Add Photos to This Folder
Place your images in the `public/images/` directory with these names:

**Family Carousel Photos:**
- `family1.jpg` - Family group photo
- `family2.jpg` - Another family moment
- `family3.jpg` - Vacation or celebration photo
- `family4.jpg` - Candid family moment
- `family5.jpg` - Recent family photo

**Life Milestone Photos:**
- `wedding.jpg` - Wedding photo (2012)
- `daughter.jpg` - Daughter's photo (born 2016)
- `son.jpg` - Son's photo (born 2020)

### Step 2: Update Image References (Optional)
If you want to use different filenames, update the paths in:

**File:** `src/components/FamilySection.jsx`

```javascript
const familyPhotos = [
  '/images/family1.jpg',  // Change to your filename
  '/images/family2.jpg',
  '/images/family3.jpg',
  '/images/family4.jpg',
  '/images/family5.jpg',
];
```

### Supported Image Formats
- JPG/JPEG
- PNG
- WebP
- SVG

### Recommended Image Sizes
- **Carousel photos**: 1200x900px or 16:9 ratio
- **Milestone cards**: 800x600px or 4:3 ratio
- **Keep file sizes under 500KB** for best performance

### Current Status
The site is using placeholder images. Once you add your photos, they will automatically appear!

### Example Upload Process
1. Open File Explorer
2. Navigate to: `C:\Repos\Learning\public\images\`
3. Copy your photos into this folder
4. Rename them to match the filenames above
5. Refresh your browser at http://localhost:5173/

That's it! Your photos will now appear in the carousel and timeline.
