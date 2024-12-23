// import { useParams } from "react-router-dom";
import { DaDrone } from "../assets/assets";

const BlogDetailPage = () => {
//   const params = useParams<{ blogId: string }>();
  return (
    <div>
      {/* This is a single blog page {params.blogId} */}
      <div className="container">
        <p>Dec 23rd, 2024</p>
        <h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          corrupti tempore vitae?
        </h4>
      </div>
      <div className="container lg:h-[534px] h-[40vh] rounded-sm overflow-hidden my-8">
        <img
          src={DaDrone}
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="flex container">
        {/* <div className="w-1/3 md:grid  h-fit hidden sticky top-28">
        <h6>Table of Contents</h6>
        <p>Introduction</p>
        <p>Introduction</p>
        <p>Introduction</p>
        <p>Introduction</p>
        <p>Conclusion</p>
        </div> */}
        <div className="grid gap-4 md:w-2/3 text-justify">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab necessitatibus quo nihil cum consequuntur incidunt recusandae aut modi, reprehenderit sed et tenetur aperiam, id exercitationem ex beatae quisquam! Dignissimos, laudantium!</p>
            <br />
            <h5>lorem</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, adipisci asperiores nostrum nobis quia aperiam corrupti eligendi quaerat sit culpa rem laudantium veniam enim? Et, ipsum quasi expedita error quo quae nulla illo voluptates. In necessitatibus nobis tempore officia aspernatur, repellat, dolorem fugit voluptatum natus eum perferendis doloribus id quidem.</p>
            <h5>lorem</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, adipisci asperiores nostrum nobis quia aperiam corrupti eligendi quaerat sit culpa rem laudantium veniam enim? Et, ipsum quasi expedita error quo quae nulla illo voluptates. In necessitatibus nobis tempore officia aspernatur, repellat, dolorem fugit voluptatum natus eum perferendis doloribus id quidem.</p>
            <h5>lorem</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, adipisci asperiores nostrum nobis quia aperiam corrupti eligendi quaerat sit culpa rem laudantium veniam enim? Et, ipsum quasi expedita error quo quae nulla illo voluptates. In necessitatibus nobis tempore officia aspernatur, repellat, dolorem fugit voluptatum natus eum perferendis doloribus id quidem.</p>
            <h5>Conclusion</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, adipisci asperiores nostrum nobis quia aperiam corrupti eligendi quaerat sit culpa rem laudantium veniam enim? Et, ipsum quasi expedita error quo quae nulla illo voluptates. In necessitatibus nobis tempore officia aspernatur, repellat, dolorem fugit voluptatum natus eum perferendis doloribus id quidem.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
