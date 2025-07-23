import ServicePage from '../services/page';

// const layoyt = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   return (
//     <div className='backdrop-grayscale-100'>
//          {children}
//          <ServicePage/>
//     </div>
//   )
// }

// export default layoyt

export default function AboutLayout() {
  return (
    <>
         <ServicePage/>
     </>
  );
}
