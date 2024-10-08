export const windDirectionSensorTypeCode = 'WINDDIR';
export const windDirectionTitle = 'Arah Angin';
export const windDirectionSubtitle = 'Arah Angin Area';

export const windDirectionGenerateColor = () => {
  return 'green';
};

export const windDirectionGenerateIcon = (value?: number) => {
  return (
    <div className='w-4 h-4 flex items-center justify-center'>
      <p className='text-green-600 font-semibold text-sm'>{generateDirection(value)}</p>
    </div>
  );
};

const generateDirection = (value?: number) => {
  if (!value) return 'Tidak Ada Data';
  if (value >= 0 && value < 45) return 'U';
  if (value >= 45 && value < 90) return 'TL';
  if (value >= 90 && value < 135) return 'T';
  if (value >= 135 && value < 180) return 'TG';
  if (value >= 180 && value < 225) return 'S';
  if (value >= 225 && value < 270) return 'BD';
  if (value >= 270 && value < 315) return 'B';
  if (value >= 315) return 'Barat Laut';
};

export const windDirectionInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Arah angin diukur dalam derajat searah jarum jam dari arah utara</p>
    <p>
      Arah angin <span className='text-primary'>0° hingga 44°</span> adalah Utara
    </p>
    <p>
      Arah angin <span className='text-primary'>45° hingga 89°</span> adalah Timur Laut
    </p>
    <p>
      Arah angin <span className='text-primary'>90° hingga 134°</span> adalah Timur
    </p>
    <p>
      Arah angin <span className='text-primary'>135° hingga 179°</span> adalah Tenggara
    </p>
    <p>
      Arah angin <span className='text-primary'>180° hingga 224°</span> adalah Selatan
    </p>
    <p>
      Arah angin <span className='text-primary'>225° hingga 270°</span> adalah Barat Daya
    </p>
    <p>
      Arah angin <span className='text-primary'>270° hingga 314°</span> adalah Barat
    </p>
    <p>
      Arah angin <span className='text-primary'>315° hingga 359°</span> adalah Barat Laut
    </p>
  </div>
);
