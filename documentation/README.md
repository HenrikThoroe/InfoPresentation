# Documentation

This section covers the required documentation of the presentation.
The document is written in LaTeX.

## Requirements

This project was build on Windows. The following is required for building
the documentation.

-   [MikTeX](https://miktex.org/download)
-   [Perl](https://strawberryperl.com/)

On Unix systems other software might be required.

## Build

To build the LaTeX document open a powershell inside the /documentation directory and execute

```sh
pdflatex Dokumentation.tex --aux-directory temp --output-directory dist
```
