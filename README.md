# sc-campaign

View the website at [https://dhs-sc.github.io/sc-campaign/](https://dhs-sc.github.io/sc-campaign/)

---

### How to add new entry

- Update [Student-Data CSV files](https://github.com/dhs-sc/sc-campaign/data-processing/data-files) with a new entry
- Add in the corresponding [images/thumbnails](https://github.com/dhs-sc/sc-campaign/assets/img/student-data) and [videos](https://github.com/dhs-sc/sc-campaign/assets/vid)
- Run the following command in your terminal `python3 data-processing/data-processing.py ./data-files/ ../assets/json/` on the same folder level as this README.md file.
  - Note:exclamation:: you need to have [python 3](https://www.python.org/downloads/) installed before running the above command.

---

### File size limits:

Note:exclamation:: All uploaded file sizes have to be **smaller than 25mb**. If the file size is larger than 25mb, you can use video compressors like [this](https://www.freeconvert.com/video-compressor) to compress the video to below the size limit.

---

### Upload guidelines

For Images:

- Upload images at [https://github.com/dhs-sc/sc-campaign/assets/img/student-data](https://github.com/dhs-sc/sc-campaign/assets/img/student-data)
  - Read [this](https://github.com/dhs-sc/sc-campaign/assets/img/student-data) to learn how to upload files to Github
- File types: **PNG or JPG**
- File names: _can be anything, as long as there are no repeats_
- What to update for Student-Data CSV?
  - You need to add in the **file name** _(with file type extension, ie with `.png` or `.jpg`)_ in the respective row and column

For Videos:

- Upload videos at [https://github.com/dhs-sc/sc-campaign/assets/vid](https://github.com/dhs-sc/sc-campaign/assets/vid)
  - Read [this](https://github.com/dhs-sc/sc-campaign/assets/img/student-data) to learn how to upload files to Github
- File types: **MP4**
- File names: _can be anything, as long as there are no repeats_
- What to update for Student-Data CSV?
  - You need to add in the **file name** _(with file type extension, ie with `.mp4`)_ in the respective row and column
- Alternative ways: you can also **upload the video to some streaming platform for eg: Youtube and paste the link** in the CSV instead of the file name.

For Student-Data CSV:

- Upload the csv files at [https://github.com/dhs-sc/sc-campaign/data-processing/data-files](https://github.com/dhs-sc/sc-campaign/data-processing/data-files)
  - Please keep the file names the same as the ones currently in the folder, ie **replace the current files**.
  - There are currently 3 csv files that needs to be filled:
    - `jh-group-data.csv` which is for JH groups for the Final Presentation Project. Click [here](https://dhs-sc.github.io/sc-campaign/candidates.html?p=fpp&l=jh) to go to webpage.
    - `jh-student-data.csv` which is for JH individual candidates. Click [here](https://dhs-sc.github.io/sc-campaign/candidates.html?p=profile&l=jh) to go to one of the webpages.
    - `sh-student-data.csv` which is for SH individual candidates. Click [here](https://dhs-sc.github.io/sc-campaign/candidates.html?p=profile&l=sh) to go to one of the webpage.
  - The **groups'/individual candidates' IDs** of the _can be anything, as long as there are no repeats_
  - The **groups'/individual candidates' names** _can be anything or even left blank, as long as there are no repeats_
  - The **groups' description** _can be anything or even left blank, as long as there are no repeats_
