import Button from '../element/Button';

interface CategorySectionProps {
  onCategoryChange: (category: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ onCategoryChange }) => {
  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
  };

  const buttonCategory = 'hover:scale-105 bg-blue-600 transition duration-300';

  return (
    <section className="relative py-7 mx-[200px] flex-col my-8 border-y h-[150px]">
      <div className="text-center mb-3">
        <p className="text-xl">CATEGORIES</p>
      </div>
      <div className="container mx-auto flex justify-center px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto">
          <Button classname={buttonCategory} onClick={() => handleCategoryClick('All')}>
            All
          </Button>
          <Button classname={buttonCategory} onClick={() => handleCategoryClick(`men's clothing`)}>
            Mens
          </Button>
          <Button classname={buttonCategory} onClick={() => handleCategoryClick("women's clothing")}>
            Womens
          </Button>
          <Button classname={buttonCategory} onClick={() => handleCategoryClick('jewelery')}>
            Accessoris
          </Button>
          <Button classname={buttonCategory} onClick={() => handleCategoryClick('electronics')}>
            Electronics
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
