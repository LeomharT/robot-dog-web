import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function StanceControls() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>姿态控制</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='w-40 flex flex-col gap-3.5'>
          <Button className='w-full h-17 cursor-pointer' variant='secondary'>
            蹲下
          </Button>
          <Button className='w-full h-17 cursor-pointer' variant='secondary'>
            站起
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
