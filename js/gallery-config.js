/**
 * CONFIGURATION DES GALERIES - Portfolio Sacha RUFFINO
 * 
 * Ce fichier permet de gérer facilement les images des galeries.
 * Pour modifier les images d'un projet, il suffit d'éditer ce fichier.
 * 
 * FORMAT :
 * {
 *   'nom-projet': [
 *     { 
 *       src: 'chemin/vers/image.jpg',     // Chemin de l'image
 *       caption: 'Description de l\'image' // Description affichée
 *     },
 *     ...
 *   ]
 * }
 */

const GALLERY_CONFIG = {
    /**
     * ====================================
     * PROJET GOUPIL 4000 - Mini-Fraiseuse CNC
     * ====================================
     * Pour ajouter une image :
     * 1. Placez l'image dans images/projects/goupil4000/
     * 2. Ajoutez une ligne ci-dessous avec src et caption
     * 
     * Pour retirer une image :
     * - Supprimez ou commentez la ligne correspondante
     * 
     * Pour réorganiser :
     * - Déplacez les lignes dans l'ordre souhaité
     */
    'goupil4000': [
        { 
            src: 'images/projects/goupil4000/goupil-4000-vue1.png', 
            caption: 'GOUPIL 4000 - Vue d\'ensemble 3D' 
        },
        { 
            src: 'images/projects/goupil4000/goupil-4000-vue2.png', 
            caption: 'GOUPIL 4000 - Vue de détail' 
        },
        { 
            src: 'images/projects/goupil4000/goupil-4000-photo2.jpg', 
            caption: 'GOUPIL 4000 - Photo réelle' 
        },
        { 
            src: 'images/projects/goupil4000/broche-detail.png', 
            caption: 'Broche avec changeur d\'outil automatique' 
        },
        { 
            src: 'images/projects/goupil4000/architecture-vue.png', 
            caption: 'Architecture technique' 
        },
        { 
            src: 'images/projects/goupil4000/simulation-fem.png', 
            caption: 'Simulation FEM - Analyse des contraintes' 
        },
        { 
            src: 'images/projects/goupil4000/analyse-deformation.png', 
            caption: 'Analyse des déformations' 
        },
        { 
            src: 'images/projects/goupil4000/cas-chargement.png', 
            caption: 'Cas de chargement' 
        },
        { 
            src: 'images/projects/goupil4000/schema-electrique.png', 
            caption: 'Schéma électrique complet' 
        },
        { 
            src: 'images/projects/goupil4000/logiciel-pilotage.png', 
            caption: 'Logiciel de pilotage GoupilSoftV0' 
        },
        { 
            src: 'images/projects/goupil4000/optimisation-topo.png', 
            caption: 'Optimisation topologique' 
        },
        { 
            src: 'images/projects/goupil4000/gantt-planning.png', 
            caption: 'Planning projet Gantt' 
        }
    ],

    /**
     * ====================================
     * PROJET ROBOT MARCHEUR FOURCADE
     * ====================================
     * Images du robot marcheur et projet Fourcade (concours national)
     */
    'robot': [
        { 
            src: 'images/projects/robot-marcheur/fourcade-iso-reel.jpg', 
            caption: 'Robot Marcheur Fourcade - Photo réelle du prototype' 
        },
        { 
            src: 'images/projects/robot-marcheur/robot-vue1.png', 
            caption: 'Robot Marcheur Fourcade - Modélisation 3D vue principale' 
        },
        { 
            src: 'images/projects/robot-marcheur/robot-vue2.png', 
            caption: 'Robot Marcheur Fourcade - Vue de côté' 
        },
        { 
            src: 'images/projects/robot-marcheur/robot-fourcade-vue1.png', 
            caption: 'Projet Fourcade - Vue d\'ensemble CAO' 
        },
        { 
            src: 'images/projects/robot-marcheur/robot-fourcade-vue2.png', 
            caption: 'Projet Fourcade - Détails mécaniques' 
        },
        { 
            src: 'images/projects/robot-marcheur/robot-fourcade-vue3.png', 
            caption: 'Projet Fourcade - Montage final' 
        }
    ],

    /**
     * ====================================
     * PROJET GOUPIL 3000 - Première CNC
     * ====================================
     * Version initiale de la fraiseuse CNC
     */
    'goupil3000': [
        { 
            src: 'images/projects/goupil3000/goupil-3000-photo1.jpg', 
            caption: 'GOUPIL 3000 - Première version CNC fonctionnelle' 
        }
    ],

    /**
     * ====================================
     * PROJET MACHINE DE GARNISSAGE AUTOMATISÉE
     * ====================================
     * Machine automatisée pour garnir les macarons
     * Utilise Computer Vision (OpenCV) + CNC 4 axes
     */
    'machine-garnissage': [
        { 
            src: 'images/projects/machine-garnissage/machine-vue-ensemble.jpg', 
            caption: 'Machine de garnissage automatisée - Vue d\'ensemble avec macarons' 
        },
        { 
            src: 'images/projects/machine-garnissage/electronique-detail.jpg', 
            caption: 'Détail de l\'électronique - Arduino et carte de contrôle CNC' 
        }
    ]
};

/**
 * ====================================
 * INSTRUCTIONS D'UTILISATION
 * ====================================
 * 
 * AJOUTER UNE NOUVELLE IMAGE :
 * ----------------------------
 * 1. Placez votre image dans le dossier du projet :
 *    images/projects/[nom-projet]/
 * 
 * 2. Ajoutez une ligne dans la galerie correspondante :
 *    { 
 *      src: 'images/projects/[nom-projet]/[nom-image].jpg', 
 *      caption: 'Description de votre image' 
 *    },
 * 
 * RETIRER UNE IMAGE :
 * -------------------
 * - Supprimez ou commentez (//) la ligne correspondante
 * 
 * RÉORGANISER LES IMAGES :
 * ------------------------
 * - Déplacez les lignes dans l'ordre souhaité
 * - La première image sera affichée en premier dans la galerie
 * 
 * CRÉER UNE NOUVELLE GALERIE :
 * ----------------------------
 * 1. Ajoutez une nouvelle section dans GALLERY_CONFIG :
 *    'nouveau-projet': [
 *      { src: '...', caption: '...' },
 *      { src: '...', caption: '...' }
 *    ]
 * 
 * 2. Dans index.html, ajoutez data-project="nouveau-projet"
 *    au bouton de galerie correspondant
 * 
 * MODIFIER LES DESCRIPTIONS :
 * ---------------------------
 * - Éditez simplement le texte dans 'caption'
 * - Utilisez \' pour les apostrophes (ex: 'Vue d\'ensemble')
 * 
 * ====================================
 * EXEMPLES
 * ====================================
 * 
 * EXEMPLE 1 - Ajouter une image à GOUPIL 4000 :
 * 
 * { 
 *   src: 'images/projects/goupil4000/nouvelle-image.jpg', 
 *   caption: 'Description de ma nouvelle image' 
 * },
 * 
 * EXEMPLE 2 - Créer une nouvelle galerie :
 * 
 * 'machine-garnissage': [
 *   { 
 *     src: 'images/projects/machine-garnissage/vue1.jpg', 
 *     caption: 'Machine de garnissage - Vue 1' 
 *   },
 *   { 
 *     src: 'images/projects/machine-garnissage/vue2.jpg', 
 *     caption: 'Machine de garnissage - Vue 2' 
 *   }
 * ]
 * 
 * EXEMPLE 3 - Commenter une image temporairement :
 * 
 * // { 
 * //   src: 'images/projects/goupil4000/ancienne-image.jpg', 
 * //   caption: 'Cette image est temporairement masquée' 
 * // },
 */

// Export de la configuration
// NE PAS MODIFIER CETTE LIGNE
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GALLERY_CONFIG;
}
