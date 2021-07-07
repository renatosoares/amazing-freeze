import React from "react";

import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import TeachingImage from "draws/Teaching";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Make your registration right now!</h6>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe animi
        numquam dignissimos sequi ex accusantium magnam voluptatum deserunt
        pariatur iusto cum delectus, enim unde cupiditate perspiciatis porro
        amet, facere nemo.
      </p>
      <CalloutActions>
        <Button color="primary">Matriculate</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <TeachingImage />
    </CalloutMedia>
  </Callout>
);
