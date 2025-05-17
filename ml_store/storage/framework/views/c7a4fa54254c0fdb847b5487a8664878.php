<?php $__env->startSection('title', 'About Page'); ?>

<?php $__env->startSection('content'); ?>
<div class="card">
    <h5 class="card-header text-center">Table Orders</h5>
    <div class="table-responsive text-nowrap">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Order Id</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody class="table-border-bottom-0">
            <?php $__currentLoopData = $order_items; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                <tr class="bg-light">
                    <td><?php echo e($item['id']); ?></td>
                    <td colspan="1">📦 <strong><?php echo e($item['name']); ?></strong></td>
                    <td><?php echo e($item['quantity']); ?></td>
                    <td>$<?php echo e(number_format($item['price'], 2)); ?></td>
                    <td><?php echo e($item['order_id']); ?></td>
                    <td><?php echo e(\Carbon\Carbon::parse($item['created_at'])->format('M d, Y')); ?></td>

                    <td>
                        <span class="badge bg-label-primary me-1"><?php echo e($order['status'] ?? 'pending'); ?></span>
                    </td>
                    <td>
                        <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                                <a class="dropdown-item" href="#"><i class="bx bx-trash me-1"></i> Delete</a>
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

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\ml-store-api\resources\views/sale.blade.php ENDPATH**/ ?>