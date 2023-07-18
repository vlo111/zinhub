import Grid from '@/app/posts/course/components/flex/grid';
import Row from '@/app/posts/course/components/flex/row';
import { ZUploadImage } from '@/app/posts/uploadimage';
import FormItem from '@/components/form/item';
import { Textarea } from '@/components/texarea';

const JobDescription = () => {
  return (
    <Grid>
      <Row>
        <FormItem label="Աշխատանքի նկարագրություն" name="description">
          <Textarea name="description" />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Պարտականություններ" name="responsibilities">
          <Textarea name="responsibilities" />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Պահանջներ, հմտություներ" name="skills">
          <Textarea name="skills" />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Հավելյալ նշումներ" name="notes">
          <Textarea name="notes" />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Ինչ ենք մենք առաջարկում (Ընկերության մասին)" name="offer">
          <Textarea name="offer" />
        </FormItem>
      </Row>
      <div className="col-span-2 w-[45%]">
        <ZUploadImage name="postImage" label="Կցել նկար հայտարարության համար " />
      </div>
    </Grid>
  );
};

export default JobDescription;
