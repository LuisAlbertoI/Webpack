import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import { globby } from "globby";
import fs from "fs";

// optimize images to webp and copy folder structure
// optimize multi sizes images

(async (input, output, sizes) => {
  // get files path
  const paths = await globby(input, {
    expandDirectories: {
      extensions: ["jpg", "jpeg"]
    }
  });

  if (paths.length > 0) {
    paths.forEach((path) => {
      const filename = path.split(/[\\|//]/).pop();
      const destination = output.concat(
        path.replace(input, "").replace(filename, "")
      );

      // load files
      fs.readFile(path, (error, data) => {
        if (data) {
          // generate multi sizes images
          sizes.forEach(async (size) => {
            // optimize images to webp
            const image = await imagemin.buffer(data, {
              plugins: [
                imageminWebp({
                  quality: 60,
                  resize: {
                    width: size,
                    height: 0
                  }
                })
              ]
            });

            // make dir output
            fs.mkdirSync(destination, { recursive: true });

            // validate dir
            if (fs.existsSync(destination)) {
              // write file in dir
              const filepath = destination.concat(
                [filename.split(".")[0], size].join("-"),
                ".webp"
              );

              fs.writeFile(filepath, image, (error) => {
                if (error) console.error(error);
              });
            }
          });
        } else {
          console.error(error);
        }
      });
    });
  } else {
    console.log("Not found data...");
  }
})("unoptimized", "public/images", [1080]);
