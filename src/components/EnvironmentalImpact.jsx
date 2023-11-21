import React from "react";

const EnvironmentalImpact = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">
        Environmental Impact of Single-Use Cans
      </h2>
      <p className="mb-4">
        Single-use cans, such as those used for beverages like Red Bull,
        contribute significantly to environmental issues. The environmental
        impact stems from various stages of the life cycle of these cans,
        including production, transportation, consumption, and disposal.
      </p>

      <p className="mb-4">
        <span className="font-bold">
          Resource Extraction and Energy Consumption:
        </span>{" "}
        The production of aluminum cans involves extracting and processing
        bauxite ore, a resource-intensive and environmentally damaging process.
        Manufacturing aluminum from raw materials requires a substantial amount
        of energy, contributing to carbon emissions and other environmental
        pollutants.
      </p>

      <p className="mb-4">
        <span className="font-bold">Transportation Emissions:</span> The
        transportation of single-use cans from manufacturing plants to
        distribution centers and then to retailers results in additional carbon
        emissions. This contributes to air pollution and exacerbates climate
        change.
      </p>

      {/* Continue adding paragraphs for each point */}

      <p className="mb-4">
        Considering the environmental concerns associated with single-use cans,
        there is a pressing need for a transition toward more sustainable
        packaging solutions. This shift necessitates increased recycling
        efforts, consumer awareness to encourage responsible consumption and
        disposal habits, and a redirection of resources toward eco-friendly
        alternatives. Embracing reusable containers and supporting companies
        prioritizing environmentally conscious packaging are crucial steps
        toward fostering a more sustainable future.
      </p>
    </div>
  );
};

export default EnvironmentalImpact;
