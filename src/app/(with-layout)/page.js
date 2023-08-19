/** @format */

import Image from "next/image";
import image1 from "@/assets/photo1.jpg";
import image2 from "@/assets/photo2.jpg";

const HomePage = () => {
  return (
    <main>
      <h1 className="selection:bg-orange-300">Home</h1>
      {/* <Image alt="" src={image2} width={600} height={400} placeholder="blur" /> */}
      {/* <Image
        alt=""
        src="/photo2.jpg"
        width={600}
        height={400}
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRiQCAABXRUJQVlA4WAoAAAAgAAAABQAAAwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggNgAAALABAJ0BKgYABAADgFolsAJ0APSH+lwA/mFfmGKvqrSCI2GLKqEp2DrPU7/IXTlTNeZ8jAAAAA=="
      /> */}
      <Image
        alt=""
        src="https://www.state.gov/wp-content/uploads/2023/04/shutterstock_1263201358-2280x1282.jpg"
        width={600}
        height={337.5}
        placeholder="blur"
        blurDataURL="data:image/webp;base64,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"
      />
    </main>
  );
};

export default HomePage;
