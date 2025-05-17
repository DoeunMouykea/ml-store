<?php $__env->startSection('title', 'All Products'); ?>

<?php $__env->startSection('content'); ?>
<div class="card">
    <h5 class="card-header text-center">Table Products</h5>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Material</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody class="table-border-bottom-0">
                <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr>
                        <td><?php echo e($product->id); ?></td>
                        <td>
                            <img src="<?php echo e(Storage::url($product->image)); ?>" width="60" />
                        </td>
                        <td><?php echo e(Str::limit($product->name, 20)); ?></td>
                        <td><?php echo e(Str::limit($product->material, 10)); ?></td>
                        <td><?php echo e(Str::limit($product->category, 10)); ?></td>
                        <td>$<?php echo e(number_format($product->price, 2)); ?></td>
                        <td><?php echo e($product->stock); ?></td>
                        <td><?php echo e(Str::limit($product->description, 50)); ?></td>
                        <td>
                            <div class="dropdown">
                                <button type="button" class="btn p-0 dropdown-toggle" data-bs-toggle="dropdown">
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="<?php echo e(route('products.edit', $product->id)); ?>">
                                        <i class="bx bx-edit-alt me-1"></i> Edit
                                    </a>
                                    <form action="<?php echo e(route('products.destroy', $product->id)); ?>" method="POST" onsubmit="return confirm('Are you sure?')">
                                        <?php echo csrf_field(); ?>
                                        <?php echo method_field('DELETE'); ?>
                                        <button class="dropdown-item" type="submit">
                                            <i class="bx bx-trash me-1"></i> Delete
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </td>
                    </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>
    </div>
</div>

<?php echo $__env->make('components.script', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\ml-store-api\resources\views/showproduct.blade.php ENDPATH**/ ?>