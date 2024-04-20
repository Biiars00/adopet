import { inject, injectable } from "tsyringe";
import { storage } from "../database/firebase-admin";

@injectable()
class StorageFilesGateway {
  constructor() {}

  async uploadImage(fileBuffer: Buffer, fileName: string) {
    if (!fileName) {
      throw new Error("A file name must be specified.");
    }

    const uploadFile = storage.file(fileName);

    await uploadFile.save(fileBuffer, {
      gzip: true,
    });

    const [url] = await uploadFile.getSignedUrl({
      action: "read",
      expires: "01-01-2500",
    });

    return url;
  }
}

export default StorageFilesGateway;
