// components/CardSection.js
import React from 'react';

const CardSection = () => {
  return (
    <section className=" bg-gray-50 h-screen pt-20">

      
      <div className='mb-20'>
      <h2 className='text-3xl font-bold text-center'>タイトル</h2>
      <p className='text-center pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, hic.</p>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, hic.</p>
      </div>

      <div className="container mx-auto py-4">
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
        {/* カード1 */}
        <div className="bg-white rounded-lg shadow-md p-8 transition-shadow duration-300 hover:shadow-lg max-w-xs mr-8">
          <h2 className="text-xl font-bold mb-4">カード1</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At consequuntur praesentium neque? Hic ea voluptates illo doloribus blanditiis, voluptatum quam. Temporibus, excepturi officiis. Facere voluptatem asperiores dolore quas nisi odit aperiam, aspernatur sed. Perferendis vel qui facere omnis nesciunt commodi.
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente aspernatur corporis impedit aperiam numquam quod laudantium inventore ut animi laborum explicabo repellendus nisi at autem pariatur nobis, sunt error!</p>
        </div>
        {/* カード2 */}
        <div className="bg-white rounded-lg shadow-md p-8 transition-shadow duration-300 hover:shadow-lg max-w-xs mr-8">
          <h2 className="text-xl font-bold mb-4">カード2</h2>
          
          <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate aliquam et eius, porro alias, sequi iusto aut omnis velit quidem eaque sit ex totam in sed unde, aliquid quisquam esse.
          
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eligendi voluptates deserunt suscipit, architecto commodi, consectetur mollitia perferendis dolorum quos possimus voluptatum ipsa. Illo fugit nihil molestiae ipsam, adipisci minus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae, numquam perspiciatis corporis eum voluptate velit architecto vel nemo. Autem et corrupti, expedita labore voluptas placeat beatae dignissimos quas accusamus.</p>
        </div>
        {/* カード3 */}
        <div className="bg-white rounded-lg shadow-md p-8 transition-shadow duration-300 hover:shadow-lg max-w-xs">
          <h2 className="text-xl font-bold mb-4">カード3</h2>
          <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate aliquam et eius, porro alias, sequi iusto aut omnis velit quidem eaque sit ex totam in sed unde, aliquid quisquam esse.
          
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eligendi voluptates deserunt suscipit, architecto commodi, consectetur mollitia perferendis dolorum quos possimus voluptatum ipsa. Illo fugit nihil molestiae ipsam, adipisci minus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae, numquam perspiciatis corporis eum voluptate velit architecto vel nemo. Autem et corrupti, expedita labore voluptas placeat beatae dignissimos quas accusamus.</p>
        </div>
        
      </div>
    </div>

    </section>
  );
};

export default CardSection;
