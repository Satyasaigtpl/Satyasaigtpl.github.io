export const projects = [
  {
    "title": "Material-Based Segmentation in Texture Space",
    "category": "Master’s thesis",
    "stack": "Fuzzy C-Means · CIELAB · UV Mapping · Agisoft Metashape",
    "tone": "violet",
    "href": "/projects/project-one",
    "summary": "Comparing colour-based material segmentation in image space, UV texture space, and texture space with geometry.",
    "contribution": "Developed and compared three Fuzzy C-Means pipelines, using soft memberships to represent ambiguous regions. Evaluated RGB and CIELAB colour features, automatic cluster selection, and uncertainty maps. Mapped Gaussian and mean curvature from 3D meshes into the UV domain.",
    "method": "Worked with synthetic data and four scanned objects: Blauer Rock, Lattenstuhl, Bunny, and Girl. The heritage objects were captured in collaboration with Klassik Stiftung Weimar. Captures used the 3D RealityCapture ScanLab (3reCapSL), except for the small Girl figurine, which was captured manually. Agisoft Metashape supported reconstruction and UV texture generation.",
    "results": [
      "UV texture space supported more surface-consistent clustering than image space in the evaluated datasets.",
      "CIELAB colour features outperformed RGB in the experiments.",
      "Adding curvature did not consistently improve segmentation and sometimes introduced noise. A geometry weight of 0.10 gave the best clustering scores among the tested weights."
    ]
  },
  {
    "title": "Material-Based Segmentation",
    "category": "Team research project",
    "stack": "K-Means · Watershed · Mean Shift · DeepLabV3+ · U-Net",
    "tone": "blue",
    "href": "/projects/project-two",
    "summary": "Comparing classical image segmentation and deep learning for identifying materials under varied lighting and backgrounds.",
    "contribution": "Fine-tuned classical segmentation methods and contributed to training and fine-tuning the deep learning models. Co-created the synthetic training dataset and automated its generation.",
    "method": "Compared K-Means, watershed, and Mean Shift with DeepLabV3+ and U-Net using a MobileNetV2 backbone. Classical experiments included single images and images averaged across different lighting conditions. Deep learning training used synthetic images of wood, glass, plastic, and metal.",
    "results": [
      "DeepLabV3+ identified materials and backgrounds more reliably than U-Net in the reported examples.",
      "U-Net captured object boundaries well, but was less reliable at material identification.",
      "Shadows, colour variation, and generalization from synthetic images to real scenes remained limitations."
    ]
  },
  {
    "title": "Synthetic Dataset Creation for Materials",
    "category": "Dataset & automation",
    "stack": "Blender · Python · Synthetic Data · Annotation",
    "tone": "lime",
    "href": "/projects/project-three",
    "summary": "Co-creating a public collection of 20,000 synthetic images spanning wood, glass, plastic, and metal.",
    "contribution": "Co-created the dataset and automated rendering and annotation generation with Python inside Blender, supporting the team’s material segmentation experiments.",
    "method": "Used 20 manually sculpted blob shapes and varied material appearances, backgrounds, placements, and lighting. Generated 20,000 images in total, including 3,500 per material class plus 6,000 additional scenes. Outputs included binary masks, pixel-labelled class masks, and JSON annotations.",
    "results": [
      "Automated a repeatable workflow for generating varied synthetic training examples.",
      "Published the dataset on Kaggle for public use.",
      "Supported training and fine-tuning of the material segmentation models."
    ],
    "link": "https://www.kaggle.com/datasets/haaroonafroz/material-dataset-new"
  }
];
