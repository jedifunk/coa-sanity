//import InstagramPreview from "../../components/preview/InstagramPreview"

export default {
  title: "Instagram Post",
  name: "instagramPost",
  type: "object",
  fields: [
    {
      name: "url",
      type: "url",
      description: "Visit an Instagram post in a browser and copy the URL."
    }
  ],
  // preview: {
  //   select: { url: "url" },
  //   components: {
  //     preview: InstagramPreview
  //   }
  // }
}