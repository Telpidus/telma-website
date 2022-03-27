import React from "react";

import "./teaching.scss";

function TeachingDescription() {
  return (
    <div className="teaching-description">
      <p>
        My work as a teacher and mentor is to bring my acquired knowledge into
        the classroom and hold the space for an inclusive, diverse and engaging
        learning experience. I do that through 3 personal principles:
      </p>
      <ul className="font-size-medium mt-5 mb-5 text-center">
        <li className="mb-3">
          <i class="fa fa-book color--secondary"></i> I flow between teacher and
          student, talker & listener.
        </li>
        <li className="mb-3">
          <i class="fa fa-heart color--secondary"></i> I hold an education space
          that honors creativity, diversity and belonging!
        </li>
        <li className="mb-3">
          {" "}
          <i class="fa fa-tree color--secondary"></i> I am an arborist, not a
          builder.
        </li>
      </ul>
      <p>
        I transport the fluidity and non-duality of nature into the classroom.
        This allows my students to bring their individual experiences, skills,
        and stories into the classroom, so that we build and inclusive and
        diverse learning environment together.
        <br />
        We collectively learn the class topic, while leanring from and with each
        other.
      </p>
      <p>
        I am interested in an education system that provides knowledge that
        seeds environmental and social transformation, not one where the work is
        finished with the completion of a final exam. Thus, I don't enter
        education spaces as a builder of a course, but as an arborist that
        adapts to the intelectual and human needs of the students and seeds the
        future by teaching and learning.
      </p>
    </div>
  );
}

export default TeachingDescription;
