import React from "react";
import { Row, Col } from "react-bootstrap";

interface ResumeProps {}

const Resume: React.FunctionComponent<ResumeProps> = () => {
  return (
    <>
      {/* <div id="resume" className="row p-0 m-0"> */}
      <Row id="resume" className="row p-0 m-0">
        <div className="col-12">
          <div className="text-center p-2 m-2 display-4">Resume</div>
        </div>
      </Row>
      {/* </div> */}
    </>
  );
};

export default Resume;
